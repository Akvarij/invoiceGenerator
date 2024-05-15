import './CompanyInvoiceInformation.css'

export const CompanyInvoiceInformation = () => {
    return (
        <div className='container-wrapper'>
            <div className='company-address'>
                <p>Street</p>
                <p>Postal</p>
                <p>ID</p>
                <p>email</p>
            </div>
            <div className='invoice-information'>
                <p>INVOICE: #23-005 </p>
                <p>DATE: 5. 6. 2023</p>
                <p>DUE DATE: 15. 6. 2023</p>
            </div>
        </div>
    )
}