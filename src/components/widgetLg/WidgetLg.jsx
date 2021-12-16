import "./widgetlg.css"


export default function WidgetLg() {
    const Button = ({type})  => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div>
            <div className="widgetLg">
            <h3 className="widgetLgTitile">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://thumbs.dreamstime.com/z/muslim-man-flat-avatar-icon-you-can-use-illustration-business-websites-company-others-140436092.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Faizz Roslee</span>
                    </td>
                    <td className="widgetLgDate">16 Dec 2021</td>
                    <td className="widgetLgAmount">Rm 320.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnv8LCaD8_7urrpxxT9AswgonrU3VqSfIFA&usqp=CAU" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Muaz Ahmed</span>
                    </td>
                    <td className="widgetLgDate">10 Dec 2021</td>
                    <td className="widgetLgAmount">Rm 20.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn3.vectorstock.com/i/1000x1000/43/87/muslim-avatar-people-flat-icon-vector-28504387.jpg" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mohd Amiruddin</span>
                    </td>
                    <td className="widgetLgDate">4 Dec 2021</td>
                    <td className="widgetLgAmount">Rm 210.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>  
            </div>
        </div>
    )
}
