// Âm thanh placeholder tổng hợp bằng WebAudio (không có file nhạc, không bài hát có bản quyền).
// Sau có file thật thì thay phần thân các hàm, giữ nguyên interface.

type Wave = OscillatorType;

class AudioServiceImpl {
  private ctx: AudioContext | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private musicTimer: number | null = null;
  private musicVol = 0.5;
  private sfxVol = 0.8;
  private wantMusic = false;
  private step = 0;

  /** Trình duyệt chỉ cho phát âm thanh sau thao tác đầu tiên của người chơi. */
  unlock(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') void this.ctx.resume();
      return;
    }
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.musicGain = this.ctx.createGain();
    this.sfxGain = this.ctx.createGain();
    const lp = this.ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1400; // tiếng lofi đục, mềm
    this.musicGain.connect(lp).connect(this.ctx.destination);
    this.sfxGain.connect(this.ctx.destination);
    this.applyVolumes();
    if (this.wantMusic) this.startMusic();
  }

  setVolumes(music: number, sfx: number): void {
    this.musicVol = music;
    this.sfxVol = sfx;
    this.applyVolumes();
    if (music <= 0) this.stopTimer();
    else if (this.wantMusic && !this.musicTimer) this.startMusic();
  }

  private applyVolumes(): void {
    if (this.musicGain) this.musicGain.gain.value = this.musicVol * 0.18;
    if (this.sfxGain) this.sfxGain.gain.value = this.sfxVol * 0.5;
  }

  private tone(freq: number, start: number, dur: number, wave: Wave = 'sine', vol = 1, out?: GainNode | null, glideTo?: number): void {
    const c = this.ctx;
    const dest = out ?? this.sfxGain;
    if (!c || !dest) return;
    const t0 = c.currentTime + start;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = wave;
    o.frequency.setValueAtTime(freq, t0);
    if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g).connect(dest);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }

  click(): void { this.tone(660, 0, 0.06, 'triangle', 0.25); }

  /** Tiếng tiền "ting" khi bán */
  ting(): void {
    this.tone(1568, 0, 0.35, 'sine', 0.6);
    this.tone(2093, 0.06, 0.4, 'sine', 0.4);
  }

  /** Khách bỏ đi */
  sad(): void { this.tone(330, 0, 0.3, 'triangle', 0.4, null, 220); }

  /** Tiếng loa phường đầu ngày: "tính tình tang" */
  loa(): void {
    [784, 659, 523, 659].forEach((f, i) => this.tone(f, i * 0.22, 0.32, 'square', 0.18));
  }

  /** Tiếng rao: một câu nhạc ngắn lên xuống như người rao hàng */
  rao(): void {
    const notes = [440, 494, 587, 494, 440, 392];
    notes.forEach((f, i) => this.tone(f, i * 0.16, i === notes.length - 1 ? 0.5 : 0.2, 'sawtooth', 0.12));
  }

  /** Nhạc nền lofi chợ quê: vòng hợp âm ngũ cung, chậm. */
  startMusic(): void {
    this.wantMusic = true;
    if (!this.ctx || this.musicTimer || this.musicVol <= 0) return;
    const chords = [[220, 261.6, 329.6], [196, 246.9, 293.7], [174.6, 220, 261.6], [196, 246.9, 329.6]];
    const melody = [659.3, 587.3, 523.3, 440, 392, 440, 523.3, 587.3];
    const beat = 0.75;
    const play = () => {
      const s = this.step++;
      if (s % 4 === 0) {
        const ch = chords[(s / 4) % chords.length];
        ch.forEach((f) => this.tone(f, 0, beat * 4, 'triangle', 0.35, this.musicGain));
      }
      if (s % 2 === 0 || Math.random() < 0.3) {
        this.tone(melody[(s * 3 + (Math.random() < 0.5 ? 0 : 2)) % melody.length], 0.02, beat * 0.9, 'sine', 0.25, this.musicGain);
      }
    };
    play();
    this.musicTimer = window.setInterval(play, beat * 1000);
  }

  stopMusic(): void {
    this.wantMusic = false;
    this.stopTimer();
  }

  private stopTimer(): void {
    if (this.musicTimer) window.clearInterval(this.musicTimer);
    this.musicTimer = null;
  }
}

export const audio = new AudioServiceImpl();
