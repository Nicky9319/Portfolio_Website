import { ExternalLink, Radio } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

function parseRepo(url) {
  try {
    const clean = url.replace(/\/+$/, '')
    const match = clean.match(/github\.com\/([^/]+)\/([^/]+)/)
    return match ? { owner: match[1], repo: match[2] } : null
  } catch {
    return null
  }
}

export function GitHubWidget({ githubUrl, liveUrl }) {
  const repo = parseRepo(githubUrl)
  if (!repo) return null

  const displayName = `${repo.owner}/${repo.repo}`

  return (
    <div className="flex flex-wrap items-center gap-2">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]"
        >
          <Radio className="w-3 h-3" />
          <span className="font-medium">Live demo</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      )}

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pill hover:border-[var(--foreground)] no-underline"
      >
        <GithubIcon size={14} />
        <span className="font-medium">{displayName}</span>
      </a>
    </div>
  )
}
