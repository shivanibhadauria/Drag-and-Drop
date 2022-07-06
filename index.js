



const filled = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')



filled.addEventListener('dragstart', dragStart)
filled.addEventListener('dragend', dragEnd)

for( const empty of empties){

    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}


function dragStart() {
   this.className += 'hold'
  
   setTimeout(() =>  {
   
   this.className = 'invisible', 0})
}

function dragEnd() {
    this.className = 'fill'
}

function dragEnter(e) {
    e.preventDefault()
    this.className += 'hovered'
}

function dragOver(e) {
    e.preventDefault()

}


function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {

    this.className = 'empty'
    this.append(fill)
   
}