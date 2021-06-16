
class Movie {
    constructor(item) {
        this.title=item.title;
        this.overview=item.overview;
        this.averageVotes=item.vote_average;
        this.totalVotes=item.total_votes;
        this.image=`https://image.tmdb.org/t/p/original${item.poster_path}`;
        this.popularity=item.popularity;
        this.releasedOn=item.release_date;
    }
    }
    module.exports=Movie;