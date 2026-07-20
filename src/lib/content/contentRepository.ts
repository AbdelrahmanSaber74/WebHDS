export type ContentRepository<TContent, TMetadata = unknown> = {
  getContent: () => TContent;
  getMetadata: () => TMetadata;
};

export function createLocalContentRepository<TContent, TMetadata>(input: {
  content: TContent;
  metadata: TMetadata;
}): ContentRepository<TContent, TMetadata> {
  return {
    getContent: () => input.content,
    getMetadata: () => input.metadata,
  };
}
