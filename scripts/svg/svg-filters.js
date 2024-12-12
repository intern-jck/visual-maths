
// function intersectRect(r1, r2) {
    //     var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
    //     var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT
    
    //     //CHECK IF THE TWO BOUNDING BOXES OVERLAP
    //   return !(r2.left > r1.right ||
    //            r2.right < r1.left ||
    //            r2.top > r1.bottom ||
    //            r2.bottom < r1.top);
    // }
    // //+ Jonas Raoni Soares Silva
    // //@ http://jsfromhell.com/math/is-point-in-poly [rev. #0]
    
    // function isPointInPoly(poly, pt){
    //     for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
    //         ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
    //         && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
    //         && (c = !c);
    //     return c;
    // }
    
    function intersectRect(r1, r2) {
    
        let x1 = parseInt(r1.getAttribute('x'));
        let x1Max = x1 + parseInt(r1.getAttribute('width'));
        let y1 = parseInt(r1.getAttribute('y'));
        let y1Max = y1 + parseInt(r1.getAttribute('height'));
    
        let x2 = parseInt(r2.getAttribute('x'));
        let x2Max = x2 + parseInt(r2.getAttribute('width'));
        let y2 = parseInt(r2.getAttribute('y'));
        let y2Max = y2 + parseInt(r2.getAttribute('height'));
    
        //console.log('R1:', x1, y1, x1Max, y1Max, 'R2:', x2, y2, x2Max, y2Max);
        //console.log(x1Max < x2, x1 > x2Max, y1 > y2Max, y1Max < y2);
        let areIntersecting = (x1Max < x2 || x1 > x2Max || y1 > y2Max || y1Max < y2);
        console.log(!areIntersecting);
    
    }
    