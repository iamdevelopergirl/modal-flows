import React from 'react';

const ListColumns = [
    {
        name : "Name",
        id : "table-header---Name"
    },
    {
        name : "Email",
        id : "table-header---Email"
    },
    {
        name : "Mobile Num",
        id : "table-header---Mobile"
    },
    {
        name : "Location Type",
        id : "table-header---LocationType"
    },
    {
        name : "Location String",
        id : "table-header---LocationString"
    },
    {
        name : "Action",
        id : "table-header---Action"
    }
]

const TableHeaderComponent = (props) => {
    return(
        <div className="table-header-container">
            <div className="list-column-container">
                {ListColumns.map((listItem, index) => {
                    return (
                        <div key={listItem.id} id={listItem.id} className={`list-col-${index + 1} height-30 border-white`}>
                            {listItem.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TableHeaderComponent;