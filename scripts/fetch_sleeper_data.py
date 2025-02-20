import requests
import pandas as pd
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

class SleeperAPI:
    def __init__(self):
        self.base_url = "https://api.sleeper.app/v1"
        self.username = os.getenv('SLEEPER_USERNAME')
        self.user_id = self._get_user_id()
        
    def _get_user_id(self):
        """Fetch user ID from username"""
        response = requests.get(f"{self.base_url}/user/{self.username}")
        return response.json()['user_id']
    
    def get_leagues(self, season=2023):
        """Get all leagues for a user in a specific season"""
        response = requests.get(f"{self.base_url}/user/{self.user_id}/leagues/nfl/{season}")
        return response.json()
    
    def get_league_rosters(self, league_id):
        """Get all rosters in a league"""
        response = requests.get(f"{self.base_url}/league/{league_id}/rosters")
        return response.json()
    
    def get_all_players(self):
        """Get all NFL players"""
        response = requests.get(f"{self.base_url}/players/nfl")
        return response.json()
    
    def get_league_matchups(self, league_id, week):
        """Get matchups for a specific week"""
        response = requests.get(f"{self.base_url}/league/{league_id}/matchups/{week}")
        return response.json()

def main():
    # Initialize API
    api = SleeperAPI()
    
    # Get leagues
    leagues = api.get_leagues()
    print(f"Found {len(leagues)} leagues")
    
    # Get all NFL players
    players = api.get_all_players()
    print(f"Found {len(players)} NFL players")
    
    # Example: Get rosters for first league
    if leagues:
        league_id = leagues[0]['league_id']
        rosters = api.get_league_rosters(league_id)
        print(f"Found {len(rosters)} rosters in league {leagues[0]['name']}")
        
        # Save players data to CSV
        players_df = pd.DataFrame.from_dict(players, orient='index')
        players_df.to_csv('data/players.csv')
        print("Saved players data to data/players.csv")

if __name__ == "__main__":
    # Create data directory if it doesn't exist
    os.makedirs('data', exist_ok=True)
    main() 