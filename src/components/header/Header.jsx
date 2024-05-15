import './Header.css'

export const Header = () => {
    return (
    <>
        <header className='invoice-header-wrapper'>
            <div className="company-name">
                <h2>COMPANY FIELD</h2>
                <h4>COMPANY NAME</h4>
            </div>
            <div className="invoice-title">
                <h1 title="invoice">INVOICE</h1>
            </div>
        </header>
    </>
    )
}