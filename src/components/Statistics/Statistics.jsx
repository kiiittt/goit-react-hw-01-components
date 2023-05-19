import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = props => {
  const { id, item } = props;

  return (
    <section className={css.statistics} key={id}>
      {item && <h2 className={css.title}>{item}</h2>}
      <ul className={css.statList}>
        {props.stats.map(data => (
          <li className={css.item} key={data.id}>
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>
              {' ' + data.percentage}
              {'%'}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  item: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
