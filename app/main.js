class PraiseButton{
          constructor(count){
           this.count = count;
          }
               /*大于10执行样式*/
        max10(){
          document.getElementById("palm").style.backgroundColor = '#f0f0f0';
          document.getElementById("finger4").style.backgroundColor = '#f0f0f0';
          document.getElementById("finger1").style.backgroundColor = '#f0f0f0';
        }
        /*小于10执行样式*/
        min10(){
            document.getElementById("palm").style.backgroundColor = '#f9f12a';
            document.getElementById("finger4").style.backgroundColor = '#f9f12a';
            document.getElementById("finger1").style.backgroundColor = '#f9f12a';
        }

        }

    class Thumb extends PraiseButton{
       constructor(x){
        super(x);
          this.count = x;
       }
       setCount(count){
         if(count >= 10){
            this.count = 0;
            super.max10();
         }else{
             this.count =count + 1;
             super.min10();
         }
          }
        getCount(){
             return this.count;
        }

    }

module.exports = Thumb;