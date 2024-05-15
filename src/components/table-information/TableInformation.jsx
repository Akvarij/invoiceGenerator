import './TableInformation.css'

export const TableInformation = () => {
    return (
        <table className='table-information'>
            <tbody>
                <tr>
                    <th>DESCRIPTION</th>
                    <th>AMOUNT</th>
                </tr>
                <tr>
                    <td className='with-border'>SERVICE</td>
                    <td className='with-border'>AMOUNT EUR</td>
                </tr>
                <tr>
                    <td className='total'>TOTAL:</td>
                    <td className='with-border-total-amount'>AMOUNT EUR</td>
                </tr>
            </tbody>
        </table>
    )
}