function getFetch(url,opt) {

  var params=Object.assign({},{
    method:"post",
    headers:{
      'Accept': 'application/json',
      "Content-type":'application/json;charset=UTF-8'
    }

  },opt||{})

  return new Promise((res,ref)=>{

    fetch(url,params).then(data=>{
      console.log(1)
      res(data)
    }).catch(error=>{
      ref(error)
      console.log(error)
    })

  })

}
export default getFetch;
