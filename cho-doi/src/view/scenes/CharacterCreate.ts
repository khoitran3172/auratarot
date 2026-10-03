// Tạo nhân vật: tên, giới tính hiển thị (ảnh hưởng xưng hô), xuất thân (3 thẻ), tên mèo.
import { DATA } from '../../core/Data';
import { createGame } from '../../core/GameState';
import { t } from '../../core/Text';
import type { Gender } from '../../core/types';
import { App } from '../App';
import { Backdrop } from '../actors/Backdrop';
import { Button } from '../ui/Button';
import { h } from '../ui/dom';
import { Sheet } from '../ui/Sheet';
import { toast } from '../ui/Toast';
import { BaseScene } from './BaseScene';

export class CharacterCreateScene extends BaseScene {
  private gender: Gender = 'f';
  private origin = DATA.config.origins[0].id;

  constructor() { super('CharacterCreate'); }

  create(): void {
    this.setup();
    new Backdrop(this, { top: 0, groundY: 360, bottom: 844 }).setMinute(300);
    this.render();
  }

  private render(name = '', pet = ''): void {
    this.ui.clear();
    const nameInput = h('input', { id: 'cc-name', class: 'input', maxlength: 16, placeholder: t('create.namePh'), value: name, autocomplete: 'off' });
    const petInput = h('input', { id: 'cc-pet', class: 'input', maxlength: 12, placeholder: t('create.petPh'), value: pet, autocomplete: 'off' });
    const rerender = () => this.render(nameInput.value, petInput.value);
    const genderBtn = (g: Gender) => h('button', {
      type: 'button', 'aria-pressed': String(this.gender === g), text: t(`create.${g}`),
      onclick: () => { this.gender = g; rerender(); },
    });
    const cards = DATA.config.origins.map((o) => h('button', {
      type: 'button', class: 'card', 'aria-pressed': String(this.origin === o.id),
      onclick: () => { this.origin = o.id; rerender(); },
    },
    h('span', { class: 't', text: `${o.name} · ${t('create.money', { money: o.money })}` }),
    h('span', { class: 's', text: o.story }),
    h('span', { class: 'p', text: o.perk })));

    const start = () => {
      const n = nameInput.value.trim();
      if (!n) { toast(t('create.needName')); nameInput.focus(); return; }
      App.state = createGame({ name: n, gender: this.gender, origin: this.origin, petName: petInput.value, settings: App.settings });
      void App.save();
      App.startDay();
      this.go('Wholesale');
    };

    Sheet(this.ui.el, { title: t('create.heading'), maxHeight: '100%' },
      h('div', { class: 'field' }, h('label', { for: 'cc-name', text: t('create.name') }), nameInput),
      h('div', { class: 'field' }, h('span', { class: 'lbl', text: t('create.gender') }), h('div', { class: 'seg' }, genderBtn('f'), genderBtn('m'))),
      h('div', { class: 'field' }, h('span', { class: 'lbl', text: t('create.origin') }), h('div', { class: 'stack', style: 'gap:8px' }, ...cards)),
      h('div', { class: 'field' }, h('label', { for: 'cc-pet', text: t('create.pet') }), petInput),
      Button({ label: t('create.start'), kind: 'primary', block: true, onClick: start }),
    );
  }
}
