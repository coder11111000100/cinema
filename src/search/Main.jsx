import React from 'react';
import { Row, Col, Pagination, Spin, Alert } from 'antd';
import { MovieCard } from './MovieCard/MovieCard';

// import { useWindowSize } from '../hooks/useWindowWidth';
import { Service } from '../Service/Service';

class Main extends React.Component {
  service = new Service();

  constructor() {
    super();
    this.getResurs();
    this.width = React.createRef(null);
    this.state = {
      movies: [],
      loading: true,
      error: false,
    };
  }

  onAlertShowBlock = error => {
    throw new Error(error);
  };

  // componentDidUpdate() {
  //   this.getResurs();
  // }
  componentDidMount() {
    this.getResurs();
  }

  getResurs = (pageNumber = 1) => {
    const findGenresName = (ids = [], ganre = []) => {
      const genresName = [];
      ids.forEach(id => {
        for (let i = 0; i < ganre.length; i++) {
          if (ganre[i].id === id) {
            genresName.push(ganre[i].name);
            break;
          }
        }
      });
      return genresName;
    };

    const movieList = this.service.getPopularMovies(pageNumber);
    const genreList = this.service.getGenresMovies();
    Promise.all([movieList, genreList])
      .then(([movieList, genreList]) => {
        const objArrayMovie = movieList.results.map(
          ({ release_date, vote_average, poster_path, title, id, genre_ids, overview, vote_count }) => {
            return {
              id,
              date: release_date,
              title,
              rate: vote_average,
              genres: findGenresName(genre_ids, genreList.genres),
              img: poster_path,
              rateValue: vote_count / 1000 > 10 ? 10 : vote_count / 1000,
              description: overview,
            };
          }
        );

        this.setState({ movies: objArrayMovie, loading: false });
      })
      .catch(error => this.onAlertShowBlock(error));
  };

  changePage = pageNumber => {
    this.getResurs(pageNumber);
  };

  render() {
    const { movies, loading, error } = this.state;
    const width = 1500;
    // const { width } = this.width.current.offsetWidth;
    return (
      <Row
        ref={this.width}
        justify='space-between'
        style={{ marginTop: '32px', minWidth: '340px' }}
        gutter={width > 670 ? [32, 32] : [18, 18]}
      >
        {!loading ? (
          movies.map(movie => (
            <Col span={width > 992 ? 12 : 24} key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))
        ) : (
          <Spin tip='Loading...'>
            <Alert
              message='Alert message title'
              description='Further details about the context of this alert.'
              type='info'
            />
          </Spin>
        )}
        <Pagination
          style={{ margin: 'auto', marginBottom: '16px' }}
          onChange={pageNumber => this.changePage(pageNumber)}
          defaultCurrent={1}
          total={100}
        />
      </Row>
    );
  }
}

export { Main };

// loader ? (
//   <Row
//     justify='space-between'
//     style={{ marginTop: '32px', minWidth: '340px' }}
//     gutter={width > 670 ? [32, 32] : [18, 18]}
//   >
//     {movies.map(
//       ({ release_date, vote_average, poster_path, title, id, genre_ids, overview, rateValue }) => (
//         <Col span={width > 992 ? 12 : 24} key={id}>
//           <MovieCard
//             date={release_date}
//             title={title}
//             rate={vote_average}
//             tags={findGenres(genre_ids)}
//             img={poster_path}
//             rateVale={rateValue}
//             description={overview}
//           />
//         </Col>
//       )
//     )}
//     <Pagination
//       style={{ margin: 'auto', marginBottom: '16px' }}
//       onChange={pageNumber =>
//         service.getPopularMovies(pageNumber).then(data => setMovies(data.results))
//       }
//       defaultCurrent={1}
//       total={100}
//     />
//   </Row>
// ) : (
//   <Spin tip='Loading...'>
//     <Alert
//       message='Alert message title'
//       description='Further details about the context of this alert.'
//       type='info'
//     />
//   </Spin>
