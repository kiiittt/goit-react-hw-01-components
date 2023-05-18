import css from './TransactionHistory.module.css'
import transactionData from './transactions.json'
import PropTypes from 'prop-types'

export const TransactionHistory = () => {
    const { id } = transactionData;
    return (
      <table className={css.transactionHistory} key={id}>
        <thead>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionData.map(data => (
            <tr key={data.id}>
              <td className={css.td}>{data.type}</td>
              <td className={css.td}>{data.amount}</td>
              <td className={css.td}>{data.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string
};