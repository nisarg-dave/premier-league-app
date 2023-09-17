const requests = {
  fetchTopAssists: "players/topassists?league=39&season=2023",
  fetchTopScorers: "players/topscorers?league=39&season=2023",
  fetchLeagueTable: "standings?league=39&season=2023",
  fetchFixtures: "fixtures?league=39&season=2023&last=10",
  fetchLiveScores: "fixtures?league=39&season=2023&live=all",
  fetchStats: "fixtures",
  fetchTeams: "teams?league=39&season=2023",
};

export default requests;
