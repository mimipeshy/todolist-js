const createAddTodoDisplay = () => {
    const popupDisplayEl = document.querySelector('.popup-display-container');
  
    popupDisplayEl.innerHTML = `
          <div class="add-container">
              <h2>New Todo</h2>
              <div class="close-btn">X</div>
              <form class="input-form">
                  <div class="input-container">
                      <label for="title" class="input-label">Todo:</label>
                      <input type="text" name="title" class="input" id="title" required/>
                  </div>
  
                  <div class="input-container">
                      <label>Due:</label>
                      <input type="date" name="date" id="date" class="input" required />
                  </div>
                  <div class="input-container">
                      <label for="priority" class="input-label">Priority:</label>
                      <select class="input" name="priority" id="priority">
                          <option class="input" value="high">High</option>
                          <option class="input" value="medium">Medium</option>
                          <option class="input" value="low">Low</option>
                      </select>
                  </div>
  
                  <button class="add-btn" id="add-todo" role="add-todo">Add New</button>
              </form>
          </div>
      `;
  };
export default createAddTodoDisplay  