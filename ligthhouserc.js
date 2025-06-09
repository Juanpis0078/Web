module.exports = {
  ci: {
    collect: {
      startServerCommand: "http-server -p 8080",
      url: ["http://localhost:8080"],
      numberOfRuns: 1
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { "minScore": 0.5 }],
        "categories:accessibility": ["warn", { "minScore": 0.7 }],
        "categories:best-practices": ["warn", { "minScore": 0.7 }],
        "categories:seo": ["warn", { "minScore": 0.7 }]
      }
    }
  }
};
