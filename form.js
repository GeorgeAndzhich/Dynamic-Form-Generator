const fs = require('fs')

const JsonString = fs.readFileSync('./data.json','utf-8')
const data = JSON.parse(JsonString)
createForm(data);
var body = document.getElementsByTagName('body');

function createForm(arrData){
    var form = document.createElement('form')
    form.setAttribute('url',arrData.submit.url)
    for(i=0;;i++){
        var input = document.createElement('input')
       switch(input){
           case 'text':
            input.setAtribute('type','text')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'textarea':
            input.setAtribute('type','textarea')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'number':
            input.setAtribute('type','number')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'checkbox':
            input.setAtribute('type','checkbox')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'color':
            input.setAtribute('type','color')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'date':
            input.setAtribute('type','date')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'datetime-local':
            input.setAtribute('type','datetime-local')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'time':
            input.setAtribute('type','time')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'password':
            input.setAtribute('type','password')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'radio':
            input.setAtribute('type','radio')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'image':
            input.setAtribute('type','image')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'file':
            input.setAtribute('type','file')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           case 'tel':
            input.setAtribute('type','tel')
            input.setAtribute('id',arrData.inputs[i].id)
            form.appendChild(input)
           default:
               alert("Неверный тип ввода!")

       }
    }
}