import './InvoicePage.css'
import { Header } from '../header/Header'
import { CompanyInvoiceInformation } from '../company-invoice-information/CompanyInvoiceInformation'
import { CustomerAddress } from '../customer-address/CustomerAddress'
import { TableInformation } from '../table-information/TableInformation'
import { BankDetails } from '../bank-details/BankDetails'
import { Footer } from '../footer/Footer'

export default function InvoicePage() {
    return (
        <div id='invoice-container'>
            <Header />
            <CompanyInvoiceInformation />

            <br></br>
            <CustomerAddress />
            
            <br></br>
            <TableInformation />

            <br></br>
            <BankDetails />

            <br></br>
            <Footer />
        </div>
    )
}