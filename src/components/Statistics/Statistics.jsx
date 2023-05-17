import css from './Statistics.module.css'
import statisticsData from './data.json'



export const Statistics = () => {
    const { id, label, percentage } = statisticsData;

    if (label === null) {
        return ' ';
    }
    
    return (<section className="css.statistics" key={id}>
  <h2 className="title">Upload stats</h2>
  <ul className="css.stat-list">
    <li className="css.item">
      <span className="css.label">{label}</span>
      <span className="css.percentage">{percentage}</span>
    </li>
    <li className="css.item">
      <span className="css.label">{label}</span>
      <span className="css.percentage">{percentage}</span>
    </li>
    <li className="css.item">
      <span className="css.label">{label}</span>
      <span className="css.percentage">{percentage}</span>
    </li>
    <li className="css.item">
      <span className="css.label">{label}</span>
      <span className="css.percentage">{percentage}</span>
    </li>
  </ul>
</section>
    )
}