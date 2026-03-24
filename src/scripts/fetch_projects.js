import fs from 'fs';
import path from 'path';

async function fetchAndGenerateProjects() {
  const username = 'LucidMach';
  const apiURL = `https://api.github.com/users/${username}/repos?per_page=100`;

  try {
    const response = await fetch(apiURL, {
      headers: {
        'User-Agent': 'NodeJS-FetchScript'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch repos: ${response.statusText}`);
    }

    const repos = await response.json();
    const projectsDir = path.join(process.cwd(), 'src/content/projects');

    if (!fs.existsSync(projectsDir)) {
      fs.mkdirSync(projectsDir, { recursive: true });
    }

    for (const repo of repos) {
      // Create markdown content
      const title = repo.name;
      const description = repo.description || 'No description provided.';
      const pubDate = new Date(repo.created_at).toISOString().split('T')[0];
      const githubUrl = repo.html_url || '';
      const demoUrl = repo.homepage || '';
      const tags = JSON.stringify(repo.topics || []);

      const githubUrlLine = githubUrl ? `githubUrl: "${githubUrl}"` : '';
      const demoUrlLine = demoUrl ? `demoUrl: "${demoUrl}"` : '';

      const markdownContent = `---
title: "${title}"
description: ${JSON.stringify(description)}
pubDate: "${pubDate}"
${githubUrlLine}
${demoUrlLine}
tags: ${tags}
---

${description}

${githubUrl ? `[View on GitHub](${githubUrl})` : ''}
${demoUrl ? `\n[View Demo](${demoUrl})` : ''}
`;

      const filePath = path.join(projectsDir, `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`);
      fs.writeFileSync(filePath, markdownContent, 'utf-8');
      console.log(`Created: ${filePath}`);
    }

    console.log('Successfully generated all project markdown files!');
  } catch (error) {
    console.error('Error generating projects:', error);
  }
}

fetchAndGenerateProjects();
