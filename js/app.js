document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const spellListItem = createSpellListItem(event.target);
  const spellList = document.querySelector('#spells-list');
  spellList.appendChild(spellListItem);

  event.target.reset();
}

const createSpellListItem = function (form) {
  const spellListItem = document.createElement('li');
  spellListItem.classList.add('spell-list-item');

  const spell_title = document.createElement('h3');
  spell_title.textContent = form.spell_title.value;
  spellListItem.appendChild(spell_title);

  const wizard_witch = document.createElement('h3');
  wizard_witch.textContent = form.wizard_witch.value;
  spellListItem.appendChild(wizard_witch);

  const difficulty_rating = document.createElement('h3');
  difficulty_rating.textContent = form.difficulty_rating.value;
  spellListItem.appendChild(difficulty_rating);

  return spellListItem;
}

const handleDeleteAllClick = function (event) {
  const spellList = document.querySelector('#spells-list');
  spellList.innerHTML = '';
}

  
  

