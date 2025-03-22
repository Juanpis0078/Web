function fetchAsignaturas() {
  const user=sessionStorage.getItem('user');
  const passwd=sessionStorage.getItem('passwd');
  fetch('http://localhost:3000/login',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      user:user,
      passwd:passwd,
    }),
  })
  .then((response)=>response.json())
  .then((data)=>{
    console.log("data:",data);
    if(data.asignaturas && data.asignaturas.length>0){
      let table=document.getElementById("asignaturasTable").getElementsByTagName('tbody')[0];
      data.asignaturas.forEach((asignatura)=>{
        let row=table.insertRow();
        let cell1=row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML=asignatura.group_id;
        cell2.innerHTML=asignatura.nombre;
        cell2.style.cursor='pointer'
        cell2.onclick=function(){
          sessionStorage.setItem('group_id',asignatura.group_id);
          window.location.href='visualizarAsignatura.html';
        }
      });
    }else{
      console.log("No hay asignaturas inscritas.");
    }
  })
  .catch((error)=>console.error('Error al cargar las asignatura:',error));
}
// Llamamos a la función cuando cargue la página
window.onload=fetchAsignaturas();
