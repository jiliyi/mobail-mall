function animate (dom,type,start,end){//辅助运动函数,type改变哪一个属性
    let dis = 0//初始的累加值
    let speed = 5;//运动速度
    if(end-start < 0){//反向运动时，速度变向
      speed *= -1
    }
    let timer = setInterval(()=>{
      dis += speed;
      dom[type] = start + dis;
      if(start + dis > end){
       dom[type] = end;
        clearInterval(timer)
      }
    },2)
  }
  export default animate