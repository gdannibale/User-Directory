import React from "react";

function Header() {
    return (
        <header style={styleHeader}>
            <h1 style={hStyle}>User-Directory</h1>
        </header>
    )
}


const styleHeader = {
backgroundColor: "navy",
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
backgroundSize: "cover",
margin: 'auto',
padding: "60px",
textAlign: "center",
color: "#fff",
}

const hStyle = {
    fontSize: "80px"
}

export default Header;