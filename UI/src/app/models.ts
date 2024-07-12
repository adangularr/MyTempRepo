export interface SegmentItemSet {
    segmentValues: SegmentValues[];
    total: number;
}

export interface SegmentValues {
    name: string;
    score: number;
    portion: number;
}
