import React, { Component } from "react";
import employees from "../../utils/employees.json";
import Table from "../../layout/table";
import Form from "../../layout/form";

class Employee extends Component {

    state = {
        sorted: employees.results,
        root: employees.results,
        employees: employees.results,
        search: ""

    }

    onChange = event => {
        let value = event.target.value
        //console.log(value)
        let filteredArr = this.state.root.filter(filtered => filtered.name.first.includes(value) || filtered.name.last.includes(value) || filtered.dob.date.includes(value) || filtered.email.includes(value))
        //console.log(filteredArr);
        this.setState({ employees: filteredArr });

    }

    onSort = () => {
        let sortArr = this.state.sorted

        sortArr.sort(function (a, b) {
            let lastNameA = a.name.last.toUpperCase();
            let lastNameB = b.name.last.toUpperCase();
            if (lastNameA < lastNameB) {
                return -1;
            }
            if (lastNameA > lastNameB) {
                return 1
            }
            return 0;

        });
        this.setState({ employees: sortArr })

    }






    render() {
        // console.log(this.state.employees)
        return (
            <>
                <Form onChange={this.onChange} />
                <Table employees={this.state.employees} onSort={this.onSort} />
            </>
        )
    }

}


export default Employee;