// Tip: avoid this ton of code using AniJS ;)

$(function(){
    var dataNodeHeader = $('#dataNodeHeader');
    // when mouseover execute the animation
    dataNodeHeader.mouseover(function(){
      
      // the animation starts
      dataNodeHeader.toggleClass('rubberBand animated');
      
      // do something when animation ends
      dataNodeHeader.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
       
       // trick to execute the animation again
        $(e.target).removeClass('rubberBand animated');
      
      });
      
    });

    $(".node-2").mouseover(function(){
      
        // the animation starts
        $(this).toggleClass('rubberBand animated');
        
        // do something when animation ends
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
         
         // trick to execute the animation again
          $(e.target).removeClass('rubberBand animated');
        
        });
        
      });


    var node2_marketplance = $('#node2_marketplance');
    var node2_person = $('#node2_person');
    var node2_nagivate = $("#node2_negative");
    var node2_sentiment = $('#node2_sentiment');
    var node2_company = $("#node2_company");

    // when mouseover execute the animation
    dataNodeHeader.click(function(){
        $(".node-2").toggleClass('hide');
    //市场
    // the animation starts
    node2_marketplance.toggleClass('bounceInLeft animated');
    
    // do something when animation ends
    node2_marketplance.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
    
    // trick to execute the animation again
        $(e.target).removeClass('bounceInLeft animated');
    
    });
    //个人
    node2_person.toggleClass('bounceInDown animated');
    
    // do something when animation ends
    node2_person.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
    
    // trick to execute the animation again
        $(e.target).removeClass('bounceInDown animated');
    
    });
    
    //负面
    node2_nagivate.toggleClass('bounceInLeft animated');
    
    // do something when animation ends
    node2_nagivate.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
    
    // trick to execute the animation again
        $(e.target).removeClass('bounceInLeft animated');
    
    });

      //负面
      node2_sentiment.toggleClass('bounceInLeft animated');
    
      // do something when animation ends
      node2_sentiment.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
      
      // trick to execute the animation again
          $(e.target).removeClass('bounceInLeft animated');
      
      });


        //公司
        node2_company.toggleClass('bounceInUp animated');

        // do something when animation ends
        node2_company.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
        
        // trick to execute the animation again
            $(e.target).removeClass('bounceInLUp animated');
        
        });


    });

   
    function randomPoints(long,wide,r,size){
        var buf = [];
        if(long <= r) throw new Error('long must > r');
        if(wide <= r) throw new Error('wide must > r');

       
        // if(buf.length =)

        while(buf.length < size){
          var x = Math.ceil((long - 2*r) * Math.random());
          var y = Math.ceil((wide - 2*r) * Math.random());
          if(buf.length == 0) {
            buf.push({x,y});
            continue;
          }
          if(buf.every(function(item){return (x-item.x)*(x-item.x) + (y-item.y)*(y-item.y) > 4*r*r})){
            buf.push({x,y});
          }
        }

        return buf;
    }

    var $parent = $("#three-nodes");
    var size = $parent.children("div").length;
    var long = $parent.width();
    var wide = $parent.height();
    var r = 20;

    var points = randomPoints(long,wide,r,size);

    $parent.children("div").each(function(index,ele ){
        
        $(ele).css({top:points[index]["y"],left:points[index]["x"]});
    });

    node2_company.click(function(){
      $parent.children("div").toggleClass('hide');
      $parent.children("div").toggleClass('fadeInUp animated');
        
      // do something when animation ends
      $parent.children("div").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e){
       
       // trick to execute the animation again
        $(e.target).removeClass('fadeInUp animated');
      
      });
    });

});
