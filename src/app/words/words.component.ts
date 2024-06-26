import { Component } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
})
export class WordsComponent {
  isShowInput = false;
  newEn = '';
  newVn = '';
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
  ];
  arrayFilters = [
    { id: 1, value: 'Xem tất cả' },
    { id: 2, value: 'Xem từ mới' },
    { id: 3, value: 'Xem từ cũ' },
  ];
  valueFilter = this.arrayFilters[0]?.value;

  handleAddWord = () => {
    if (!this.isShowInput) {
      this.isShowInput = !this.isShowInput;
    } else {
      this.arrWords.unshift({
        id: this.arrWords.length + 1,
        en: this.newEn,
        vn: this.newVn,
        memorized: false,
      });
      this.newEn = '';
      this.newVn = '';
      this.isShowInput = !this.isShowInput;
    }
  };

  handleRemoveWord = (word: any) => {
    this.arrWords = this.arrWords.filter((i) => i.id !== word.id);
  };

  showListFilter = (memorized: boolean) => {
    const selectedAll = this.valueFilter === 'Xem tất cả';
    const selectedNew = this.valueFilter === 'Xem từ mới' && memorized;
    const selectedOld = this.valueFilter === 'Xem từ cũ' && !memorized;
    return selectedAll || selectedNew || selectedOld;
  };
}
