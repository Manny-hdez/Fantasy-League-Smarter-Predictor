'use client';

import { Card, Title, BarChart, Metric, Text } from "@tremor/react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playersData = await axios.get('/api/players');
        setPlayers(playersData.data);
        const leaguesData = await axios.get('/api/leagues');
        setLeagues(leaguesData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Fantasy League Smarter Predictor</Title>
      <Text>Powered by Sleeper API</Text>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <Title>Total Players</Title>
          <Metric>{players.length}</Metric>
        </Card>
        <Card>
          <Title>Leagues</Title>
          <Metric>{leagues.length}</Metric>
        </Card>
      </div>
    </main>
  );
}
