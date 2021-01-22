import React from "react";

function TableHead(props) {
    return (
        
            
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name <button onClick={props.onSort}>Sort</button></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date Of Birth</th>

                    </tr>
              
    )
}

export default TableHead;