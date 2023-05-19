import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = props => {
    const { id } = props;
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
          {props.items.map(data => (
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};