import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClick })
{
    return (
        <button className={css.more} type="button" onClick={onClick}>Load more</button>
    );
}