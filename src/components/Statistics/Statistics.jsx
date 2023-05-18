import css from './Statistics.module.css'
import statisticsData from './data.json'


export const Statistics = () => {
    const { id } = statisticsData;

    if (css.title === null) {
        return ' ';
    }
    
    return (<section className={css.statistics} key={id}>
      <h2 className={css.title}>Upload stats</h2>
    <ul className={css.statList}>
      {statisticsData.map((data) => (
        <li className={css.item} key={data.id}>
          <span className={css.label}>{data.label}</span>
          <span className={css.percentage}>{' ' + data.percentage}{ "%"}</span>
        </li>
      ))}
    </ul>
  </section>
);
}