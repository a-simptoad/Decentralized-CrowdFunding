function ShowCampaigns({ campaigns }) {
  return (
    <div className="campaigns-container">
      {campaigns.map((campaign, index) => (
        <div key={index} className="campaign-card">
          <h2>{campaign.title}</h2>
          <p>{campaign.description}</p>
          <p>Goal: {campaign.goal} ETH</p>
          <p>Raised: {campaign.raised} ETH</p>
          <p>Deadline: {new Date(campaign.deadline * 1000).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}