function move(obj,target,speed){
				clearInterval(obj.timer);
				//获取元素当前位置   取整
				var current=parseInt(getStyle(obj,"left"));
				
				
				//判断速度的正负值
				if(current>target){
					speed=-speed;
				}
				
				//开启一个动画
				//向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识  这样可以做到相互不影响
				obj.timer=setInterval(function(){
					//            取整
					var oldVaue=parseInt(getStyle(obj,"left"));
					
					var newValue=oldVaue+speed;
					
					if((speed<0&& newValue<target)|| (speed>0&&newValue>target) ){
						newValue=target
					}
					
					obj.style.left=newValue+'px';
					
					if(newValue==target){
						clearInterval(obj.timer)
					}
				},30);						
			}
			
			
			/**
			 * 
			 * 获取当前元素的 样式
			 * @param {Object} obj 对象
			 * @param {Object} name 获取什么的样式
			 */
			function getStyle(obj,name){
				if(window.getComputedStyle){
					return getComputedStyle(obj,null)[name];
				}else{
					return obj.currentStyle[name]
				}
			}