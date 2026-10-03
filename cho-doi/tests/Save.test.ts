import { describe, expect, it } from 'vitest';
import { createGame, migrate, SAVE_VERSION } from '../src/core/GameState';
import { LocalSaveService, type KeyValueStore } from '../src/services/SaveService';

function mem(): KeyValueStore {
  const m = new Map<string, string>();
  return { getItem: (k) => m.get(k) ?? null, setItem: (k, v) => void m.set(k, v), removeItem: (k) => void m.delete(k) };
}

describe('GameState & Save', () => {
  it('tạo nhân vật theo xuất thân', () => {
    const heir = createGame({ name: ' Hạnh ', gender: 'f', origin: 'heir', petName: 'Mướp' });
    expect([heir.money, heir.rep, heir.day, heir.month, heir.dayCount]).toEqual([250, 50, 13, 8, 1]);
    expect(heir.player.name).toBe('Hạnh');
    const country = createGame({ name: 'Tèo', gender: 'm', origin: 'country', petName: '' });
    expect(country.money).toBe(150);
    expect(country.player.petName).toBe('Mướp');
    const grad = createGame({ name: 'Ny', gender: 'f', origin: 'graduate', petName: 'Mun' });
    expect([grad.money, grad.deo, grad.storyFlags.livestreamUnlocked]).toEqual([200, 0, true]);
  });

  it('lưu rồi đọc lại y nguyên', async () => {
    const svc = new LocalSaveService(mem());
    const s = createGame({ name: 'Hạnh', gender: 'f', origin: 'heir', petName: 'Mướp', seed: 9 });
    s.money = 321;
    s.debts.push({ who: 'Chú Tám Nhậu', amount: 126, sinceDay: 14 });
    await svc.save(s);
    expect(await svc.hasSave()).toBe(true);
    expect(await svc.load()).toEqual(s);
    await svc.clear();
    expect(await svc.load()).toBeNull();
  });

  it('migrate save version 0 (chưa có relations, dayCount)', () => {
    const old = createGame({ name: 'A', gender: 'm', origin: 'heir', petName: 'M' }) as unknown as Record<string, unknown>;
    delete old.relations;
    delete old.dayCount;
    old.version = 0;
    const s = migrate(old)!;
    expect(s.version).toBe(SAVE_VERSION);
    expect(s.dayCount).toBe(1);
    expect(s.relations.bachin).toBe(50);
  });

  it('save hỏng hoặc từ bản mới hơn thì trả null', async () => {
    expect(migrate(null)).toBeNull();
    expect(migrate({ version: 999 })).toBeNull();
    const store = mem();
    store.setItem('chodoi.save', '{not json');
    expect(await new LocalSaveService(store).load()).toBeNull();
  });
});
