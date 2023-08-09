import React from "react";
import SkillItem from "../components/ui/SkillItem";

export default function expertiseColumnMaker(data, colNum) {
  
  let arr = []; // list of columns
  
  let start = 0; // start index of slice
  let end = 0;   // end index of slice
  let pushedItem = 0; // number of items pushed to arr
  
  for (let col = 0; col < colNum; col++) {

    if (data.length-pushedItem>colNum && (data.length-pushedItem)%colNum !== 0) {
      end = start + Math.ceil(data.length / colNum);
    }else{
      end = start + Math.round(data.length/3);
    }

    var slicedItems = data.slice(start, end); // slice data array
    pushedItem = slicedItems.length + pushedItem;
    
    arr.push(
      <div key={`col-${col+1}`}>{slicedItems.map((skill, index) => <SkillItem key={`skill-${index}`} title={skill} />)}</div>
    );
    start = end; // update start index
  }
  return arr;
}
