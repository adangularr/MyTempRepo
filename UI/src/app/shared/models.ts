export interface SegmentItemSet {
    segmentValues: SegmentValues[];
    total: number;
}

export interface SegmentValues {
    name: string;
    score: number;
    portion: number;
}

export interface LegendItem {
    color: string;
    text: string;
}
