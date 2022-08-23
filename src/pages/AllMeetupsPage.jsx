import { MeetupItem } from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { useFetch } from "../util-hooks/useFetch";

export const AllMeetupsPage = () => {
  const { data, loading, error } = useFetch({
    url: "/data.json",
  });

  if (loading && !data && !error) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      {!loading && !error && data && (
        <ul className={classes.list}>
          {data && data.map((item) => <MeetupItem key={item.id} item={item} />)}
        </ul>
      )}
    </section>
  );
};
