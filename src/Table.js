import { useTable } from 'react-table'
import { useMemo} from 'react'
function Table ({info}) {
    const data = useMemo(
        () => info.map((test)=>(
            {col1:test.id,
            col2:test.email,
            col3:test.first_name,
            col4:test.last_name,
            col5:test.avatar
        })) 
          ,
        [info]
     )
    // const data = useMemo(
    //     () => [
    //       {
    //         col1: 'Hello',
    //         col2: 'World',
    //       },
    //       {
    //         col1: 'react-table',
    //         col2: 'rocks',
    //       },
    //       {
    //         col1: 'whatever',
    //         col2: 'you want',
    //       },
    //     ],
    //     []
    //   )
   
   
    const columns = useMemo(
     () => [
       {
         Header: 'ID',
         accessor: 'col1', // accessor is the "key" in the data
       },
       {
         Header: 'Email Id',
         accessor: 'col2',
       },
       {
        Header: 'First Name',
        accessor: 'col3',
      },
      {
        Header: 'Last Name',
        accessor: 'col4',
      },
      {
        Header: 'Avatar',
        accessor: 'col5',
      },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '16px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }

export default Table;