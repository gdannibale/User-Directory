import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableHead from "./tableHeader";

function Table(props) {
    //console.log(props.employees[0].cell)
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <TableHead onSort={props.onSort}/>
                </thead>
                <tbody>
                    {props.employees.map((employee) => {
                        return (
                        <tr>
                            <td><img alt={employee.name.first} src={employee.picture.thumbnail}></img></td>
                            <td>{employee.name.first} {employee.name.last}</td>
                            <td>{employee.cell}</td>
                            <td><a href={employee.email}>{employee.email}</a></td>
                            <td>{employee.dob.date}</td>
                        </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}




export default Table;