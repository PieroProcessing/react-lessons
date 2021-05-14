import { useEffect, useState } from "react";
import { FC } from "react"
import { ConvetionalProps } from "../../models"
;



export const List: FC<ConvetionalProps> = ({data, callback}) => {

    const [theList, settheList] = useState<[string,string][]>([]);
    console.log("🚀 ~ file: index.tsx ~ line 11 ~ theList", theList)
    // data && console.log(Object.entries(data));
    // const theList = isArray ? data: Object.entries(data);
    useEffect(
        ()=>{
            if(!data)return;
            // const isArray = Array.isArray(data);
            settheList(Object.entries(data))
        },[data]
    )
    return (
      <>
        { theList.length &&
          theList.map(([k, v]) => (
            <ul key={k} className="list-group">
              <li className="list-group-item" onClick={() => console.log('list click ', v)}>
                {k}
              </li>
            </ul>
          ))}
      </>
    );
}
