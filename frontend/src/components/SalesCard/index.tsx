import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './styles.css'
import NotificationButton from '../NotificationButton'
import { useState } from "react"

function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(new Date());
   

    return (

        <div className="dsmeta-card">
            <div className="dsmeta-sales-tittle-container">
                <h2 className="dsmeta-sales-tittle">Vendas</h2>
            </div>
            <div className="dsmeta-form-major">
                <div className="dsmeta-form-control-container">
                <p className="dsmeta-form-control-label">De</p>
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                <p className="dsmeta-form-control-label">Até</p>
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID </th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td>R$ 55430,00</td>
                            <td className="show992">5</td>
                            <td className="show992">100</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />                                        </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#342</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td>R$ 55430,00</td>
                            <td className="show992">5</td>
                            <td className="show992">100</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />                                        </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#343</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td>R$ 55430,00</td>
                            <td className="show992">5</td>
                            <td className="show992">100</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />                                        </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default SalesCard