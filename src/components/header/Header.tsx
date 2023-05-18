import { HeaderItem } from '../HeaderItem/HeaderItem';
import { IconPicker } from '../IconPicker/IconPicker';

export type THeaderProps = {
  background: string
}

export const Header = ({ background }: THeaderProps) => {
  return (
    <div className={`fixed top-0 left-0 flex justify-between h-[80px] items-center text-md text-white/50 font-extralight tracking-widest w-full ${background} transition-all transform duration-200`}>
      <div className="w-full flex items-center justify-center">
        <div className="flex justify-between w-1/2 items-center">
          <div className="flex gap-16 items-center">
            <div className="flex flex-col gap-1">
              <div className="text-white/90 border-b-[1px] border-white/40 pb-1">A L I E N W A R E</div>
              <div className="text-white/75 text-center text-xs font-extralight">ARENA</div>
            </div>
            <IconPicker icon="search" className="text-white/50 h-8 w-8" />
          </div>
          <div className="flex gap-12">
            <HeaderItem icon="caretDown" text="DISCOVER" />
            <HeaderItem icon="caretDown" text="GAMES" />
            <HeaderItem icon="caretDown" text="COMMUNITY" />
            <HeaderItem icon="caretDown" text="REWARDS" />
            <IconPicker icon="bell" className="text-white/50 h-8 w-8" />
            <IconPicker icon="profile" className="text-white/50 h-8 w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};
