function createGrid(rows,column){
    gridContainer.innerHTML= '';

   for(let i = 0 ; i < (rows * column); i++ ){ 
       const gridSquare = document.createElement('div');
       gridSquare.classList.add('grid-square');
       gridContainer.appendChild(gridSquare);

       gridSquare.addEventListener('mouseover',() =>{
        gridSquare.style.backgroundColor='blue';
       });

       gridSquare.addEventListener('mouseout' , () =>{
        gridSquare.style.backgroundColor = '';
       });
    } 
}


const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
    const Row = parseInt(document.getElementById('rows').value);
    const Column = parseInt(document.getElementById('columns').value);
    createGrid(Row,Column);


});
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
document.body.appendChild(gridContainer);


