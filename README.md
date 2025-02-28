# Fantasy League Prediction Tool

## Project Overview
A tool to analyze fantasy league data and predict player performance for upcoming seasons using historical data and advanced analytics.

## Tech Stack

### Data Collection & Processing
- **Python** with the following libraries:
  - `pandas` - For data manipulation and analysis
  - `numpy` - For numerical computations
  - `scikit-learn` - For machine learning models
  - `requests` - For API calls to fetch league data

### Machine Learning Components
- **Prediction Models**:
  - Linear Regression for basic projections
  - Random Forest for complex pattern recognition
  - XGBoost for improved accuracy
  - Time Series Analysis for trend prediction

### Backend
- **FastAPI** or **Flask** for REST API endpoints
- **PostgreSQL** for storing historical data and predictions
- **Redis** (optional) for caching frequently accessed data

### Frontend
- Continue with your existing frontend setup
- Add visualization libraries:
  - `Chart.js` or `D3.js` for interactive data visualization
  - `react-table` for displaying player stats

## Features to Implement
1. Historical Data Analysis
   - Player performance trends
   - Team statistics
   - Injury history

2. Prediction Models
   - Season-long performance predictions
   - Weekly matchup projections
   - Player comparison tools

3. Probability Calculations
   - Win/loss probability for matchups
   - Player boom/bust potential
   - Confidence intervals for predictions

## Getting Started
1. Create and activate virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies from requirements.txt:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory (this will be ignored by git)
   - Add your Sleeper username:
     ```
     SLEEPER_USERNAME=your_username
     ```

4. Run the data collection script:
   ```bash
   python scripts/fetch_sleeper_data.py
   ```

## Data Sources
- **Sleeper API**
  - Free and well-documented API
  - Real-time updates and player news
  - Documentation: https://docs.sleeper.com/