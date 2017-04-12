  var tabPlguin = (function(mod){
    return {
      hasClass: function(ele, cls){
        var reg=new RegExp('(\s*)'+cls+'(\s*$)','g');
        return reg.test(ele.className);
      },
      addClass: function(ele, cls){
        if(ele.length && ele.length > 0){
          for(var i = 0; i < ele.length; i++){
            this.singleAddClass(ele[i], cls);
          }
        }else{
          this.singleAddClass(ele, cls);
        }
      },
      singleAddClass: function(ele, cls){
        if(this.hasClass(ele)){
          return ;
        }else {
          ele.className = ele.className + ' ' + cls;
        }
      },
      removeClass: function(ele,cls){
        if(ele.length && ele.length > 0){
          for(var i = 0; i < ele.length; i++){
            this.singleRemoveClass(ele[i], cls);
          }
        }else {
          this.singleRemoveClass(ele[i], cls);
        }
      },
      singleRemoveClass: function(ele,cls){
        if(this.hasClass(ele,cls)){
          var reg1 = new RegExp('(\s*)'+cls+'(\s*$)','g');
          ele.className = ele.className.replace(reg1,'');
        }else{
          return 
        }
      },
      indexOf: function(ele){
        var parent = ele.parentElement,
            siblings = parent.children;
        for(var i = 0; i < siblings.length; i++){
          if(ele == siblings[i]){
            return i
          }
        }
        return -1;
      },
      init: function(tab_cls, panel_cls, cls){
        var tab = document.getElementsByClassName(tab_cls);
        var panel = document.getElementsByClassName(panel_cls);
        var that = this;
        for(var i = 0; i < tab.length; i++ ){
          tab[i].addEventListener('click',function(){
            that.removeClass(tab, cls);
            that.removeClass(panel, cls);
            that.addClass(this, cls);
            that.addClass(panel[that.indexOf(this)], cls);
          })
        }
      }
    }
  })(window.tabPlguin || {})
 