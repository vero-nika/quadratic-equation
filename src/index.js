module.exports = function solveEquation(equation) {
  var array=equation.split(' ');
  var a=parseInt(array[0]);
  var b=parseInt(array[3]+array[4]);
  var c=parseInt(array[7]+array[8]);
    var aret=new Array()
    var D=b*b -4*a*c;
    if (a==0){
      if (!(b==0)) {
        x1=Math.round(-c/b);
        x2=null;
      }
      return aret;
    }
      if (D==0) {
        x1=Math.round(-b/2/a);
        x2=aret[0];
      }
      if (D>0){
        x1=Math.round((-b-Math.sqrt(D))/2/a);
        x2=Math.round((-b+Math.sqrt(D))/2/a);
      }
      aret[0]=x1;
      aret[1]=x2;
      if(x1>=x2){
      aret.reverse();
    }
      return aret;
    }
