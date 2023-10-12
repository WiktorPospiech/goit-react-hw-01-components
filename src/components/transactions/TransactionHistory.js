import transactions from 'components/transactions/transactions.json';

const TransactionHistory = ({ transactions }) => {
  return (
    <>
      {transactions.map(transaction => (
        <table class="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};

export default function Transaction() {
  return (
    <table>
      <TransactionHistory transactions={transactions} />
    </table>
  );
}
