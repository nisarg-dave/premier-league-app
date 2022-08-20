const requests = {
  fetchTopAssists: "players/topassists?league=39&season=2022",
  fetchTopScorers: "players/topscorers?league=39&season=2022",
  fetchLeagueTable: "standings?league=39&season=2022",
  fetchFixtures: "fixtures?league=39&season=2022&last=10",
  fetchLiveScores: "fixtures?league=39&season=2022&live=all",
  fetchStats: "fixtures",
  fetchTeams: "teams?league=39&season=2022",
};

export default requests;
